/* 
function App() {
  const triggerNotification = useNotification("Can I have your attention?", {body:"Where are you from?"})
  return (
    <div className="home">
      <button onClick={triggerNotification}>Attention!</button>
    </div>
  );
} 
*/

export const useNotification = (title, options) => {


    /* MDN Notification API */
    if (! ("Notification") in window) {
        return;
    }

    const triggerNotification = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification(title, options)
                } else {
                    /* Not wanted by User */
                    return;
                }
            })
        } else {
            new Notification(title, options);
        }
    }

    return triggerNotification;
}