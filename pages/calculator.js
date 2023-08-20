import { useState } from "react";
import UsernamePasswordDialog from "../components/UserPasswordDialog";
import { toast } from "react-toastify";

export default function _Primary(props) {
  const { children } = props; // Destructure 'children' from 'props'
  const [dialogOpen, setDialogOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
    setDialogOpen(false);
    toast("Sign in Successfully");
  };

  const renderContent = () => {
    return <div>Embed Goes Here</div>;
  };

  return (
    <div className={[props.className]}>
      <div className="mx-auto max-w-6xl px-8 py-16 sm:px-6 sm:py-32">
        <UsernamePasswordDialog
          isOpen={dialogOpen}
          onClose={handleCloseDialog}
          onAuthenticate={handleAuthenticate}
        />
        {isAuthenticated && children}
        {isAuthenticated && renderContent()}
      </div>
    </div>
  );
}
