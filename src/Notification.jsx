let showNotification = false;
let promise = new Promise((resolve) => {
  setTimeout(() => {
    showNotification = true;
    resolve();
  }, 2500);
});

export default function Notification() {
  if (!showNotification) {
    throw promise;
  }

  return (
    <>
      <div className="alert alert-primary" role="alert">
        恭喜你中獎，這是通知！
      </div>
      <div className="alert alert-primary" role="alert">
        恭喜你中獎，這是通知！
      </div>
      <div className="alert alert-primary" role="alert">
        恭喜你中獎，這是通知！
      </div>
      <div className="alert alert-primary" role="alert">
        恭喜你中獎，這是通知！
      </div>
      
    </>
  );
}
