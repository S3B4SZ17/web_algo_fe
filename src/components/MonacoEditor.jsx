import Editor from "@monaco-editor/react";
import { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { loader } from "@monaco-editor/react";
import Reverse from "./Reverse";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCookies } from 'react-cookie';

export default function MonacoEditor () {

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
    const [contentPython, setContentPython] = useState(instructions)
    const [codeContent, setCodeContent] = useState('')
    const [response, setResponse] = useState()
    const [isresolved, setIsResolved] = useState(false)
    const editorRef = useRef(null)
    const handleEditorDidMount = (editor, monaco) => {
        console.log(editor, monaco)
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
        setCodeContent(editorRef.current.getValue())
        const data = {
            file: codeContent,
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
    
    const handleSubmit =() => {
        toast.promise(resolveAlgo(), {
            loading: "Processing ...",
            error: "Ocurrio un error con el servidor",
            success: response,
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
        
    }
    function handleEditorValidation(markers) {
        // model markers
        markers.forEach(marker => console.log("onValidate:", marker.message));
      }
  return (
    <Container>
        <Row>
            <Col md={4}> 
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Reverse/> 
            </Col>
            <Col md={8}>
                < Button onClick={handleSubmit} variant="primary" style={{margin:'5px'}}>Save</Button>
                < Button onClick={handleSubmit} variant="primary" style={{margin:'5px'}}>Submit</Button>
                <Editor
                    height="60vh"
                    defaultLanguage="python"
                    defaultValue={contentPython}
                    theme="vs-dark"
                    onChange={(value, event) => setContentPython(value, event)}
                    onMount={handleEditorDidMount}
                    onValidate={handleEditorValidation}
                />
            </Col>
        </Row>
        
    </Container>
  );
}