import Editor from "@monaco-editor/react";
import { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import { loader } from "@monaco-editor/react";
import Reverse from "./Reverse";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Monaco_editor () {

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

    const [contentPython, setContentPython] = useState("# Empieza a resolver el algoritmo")
    const editorRef = useRef(null)
    const handleEditorDidMount = (editor, monaco) => {
        console.log(editor, monaco)
        editorRef.current = editor
    }
    const handleSave =() => {
        console.log(editorRef.current.getValue())
    }
    function handleEditorValidation(markers) {
        // model markers
        markers.forEach(marker => console.log("onValidate:", marker.message));
      }
  return (
    <Container>
        <Row>
            <Col md={4}> <Reverse/> </Col>
            <Col md={8}>
                < Button onClick={handleSave} variant="primary" style={{margin:'5px'}}>Save</Button>
                < Button onClick={handleSave} variant="primary" style={{margin:'5px'}}>Submit</Button>
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