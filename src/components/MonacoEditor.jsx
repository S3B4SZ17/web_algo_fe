import Editor from "@monaco-editor/react";
import { useState, useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";
import { useCookies } from 'react-cookie';
import Image from 'react-bootstrap/Image';

export default function MonacoEditor (props) {

    // loader.config({
    //     paths: {
    //       vs: "...",
    //     },
    //     "vs/nls" : {
    //       availableLanguages: {
    //         "*": "python",
    //       },
    //     },
    //   });

    const [email, setEmail] = useState(localStorage.getItem("user_email"));
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const [cookies] = useCookies(['token']);
    var instructions = "# Empieza a resolver el algoritmo\nimport sys\n\nPara pasar argumentos se tiene que usar sys.argv\nnum = int(sys.argv[1])\n";
    const [codeContent, setCodeContent] = useState(instructions)
    const [response, setResponse] = useState('')
    const [isresolved, setIsResolved] = useState(false)
    const editorRef = useRef(null)
    
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor
    }
    const instance = axios.create({
        baseURL: "http://localhost:8080",
      });
    /**
    * Catch the AunAuthorized Request
    */
    instance.interceptors.response.use((response) => response, async (error) => {
        if (error.response.status === 401) {
          toast.error("Token invalid, please login again");
          localStorage.clear();
          window.location = '/login';
        }
      });
      
      const resolveAlgo = async () => {
        // setCodeContent(editorRef.current.getValue()) // another way of getting the content
        const data = {
            file: codeContent,
            name: props.name
          };
        const res = await instance
        .post("api/authorized/solve_algo", data, {headers: {'Authorization': `Bearer ${cookies.token}`, 'user_email': `${email}`}})
        .then((res) => {
            setIsResolved(res.data.valid);
            setResponse(res.data.message);
        })
        .catch((error) => console.error(`Error: ${error}`))
        return res
      };
    
    const handleSubmit = () => {
        toast.promise(resolveAlgo(), {
            pending: "Processing ...",
            error: "Ocurrio un error con el servidor",
            success: "Code submitted sucessfully",
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });

        toast.success(response);
    }

    useEffect(() => {
      setResponse(response);
    })

    const sendEmail = async () => {
      const data = {
        from: email,
        to: email,
        body: "Congratulations!! You solved the " + props.name + " algorithm."
      };
      instance
        .post("api/authorized/sendEmail", data, {headers: {'Authorization': `Bearer ${cookies.token}`}})
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.error(`Error: ${error}`)
        });
    }

    const handleSendEmail = () => {
      toast.promise(sendEmail(), {
          pending: "Processing ...",
          error: "Ocurrio un error con el servidor",
          success: "Email sent!!",
          icon: '👏',
          style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
          },
      });
  }
    
    function handleEditorChange(value, event) {
      console.log("here is the current model value:", value);
      setCodeContent(value)
    }
    
    function handleEditorValidation(markers) {
        // model markers
        markers.forEach(marker => console.log("onValidate:", marker.message));
      }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      < Button onClick={handleSubmit} variant="primary" style={{margin:'5px'}}>Submit</Button>
      { isresolved ?
        <>
          <Image width={86} height={86} src="https://media2.giphy.com/media/P3gCL7t3cbOWUN8ma7/giphy.gif" referrerPolicy="no-referrer"/>
          <Button onClick={handleSendEmail} variant="primary" style={{margin:'5px'}}>Send Email</Button>
        </>
        : 
        <>
        </>
      }
      
      <Editor
          height="60vh"
          defaultLanguage="python"
          defaultValue={codeContent}
          theme="vs-dark"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          onValidate={handleEditorValidation}
      />
    </>
  );
}
