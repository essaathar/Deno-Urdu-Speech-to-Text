import { useCallback } from "react";
// import { Link } from "react-router-dom";
import { useDropzone } from "npm:react-dropzone@^14.2.10";

export default function Index() {
    const onDrop = useCallback((acceptedFiles) => {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        
        console.log("FRONTEND acceptedFiles: ", acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <>
            <h2>Drag & Dropper!</h2>
            <div {...getRootProps()}>
                <input {...getInputProps} />
                <p>Drag n drop an audio (mp3) file here.</p>
            </div>
        </>
    )
}
// export default function Index() {
//   const [dinosaurs, setDinosaurs] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const response = await fetch(`http://localhost:8000/api/dino`);
//       const allDinosaurs = await response.json();
//       setDinosaurs(allDinosaurs);
//     })();
//   }, []);

//   return (
//     <main>
//       <h1>Welcome to the Dinosaur app</h1>
//       <p>Click on a dinosaur below to learn more.</p>
//       {dinosaurs.map((dinosaur) => {
//         return (
//           <Link
//             to={`/${dinosaur.name.toLowerCase()}`}
//             key={dinosaur.name}
//             className="dinosaur"
//           >
//             {dinosaur.name}
//           </Link>
//         );
//       })}
//     </main>
//   );
// }
