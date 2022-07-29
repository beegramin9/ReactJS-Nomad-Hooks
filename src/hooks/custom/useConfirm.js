
/* 
function App() {
    const proceedDelete = () => console.log("World successfully deleted");
    const abortDelete = () => console.log("Abort deleting world");
    const deleteWorld = useConfirm('Proceed deleting the world', proceedDelete, abortDelete)
    return (
        <div className="App">
            <button onClick={deleteWorld}>Delete the world</button>
        </div>
    );
}
*/

export const useConfirm = (message="", proceed, abort)  => {

    function proceedOrAbortAction() {
        if (window.confirm(message)) {
            proceed()
        } else {
            abort();
        }
    }
    return proceedOrAbortAction
}