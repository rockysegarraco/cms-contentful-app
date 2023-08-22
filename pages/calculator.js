import { useState, useEffect } from "react";
import ReactGA from 'react-ga';
import { toast } from "react-toastify";

// Absolute import
import UsernamePasswordDialog from "../components/UserPasswordDialog";
import CalculatorComponent from "../components/CalculatorEmbed";


export default function _Primary(props) {
  const { children } = props; // Destructure 'children' from 'props'
  const [dialogOpen, setDialogOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
    setDialogOpen(false);
    toast("Sign in Successfully");
  };

  const renderContent = () => {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-10 w-auto"
              src="logo-mark.svg"
              alt="SmartCommerce"
            />
            <h2 className="mt-8 text-center text-xl text-slate-950 font-semibold">
              Pricing Calculator
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <CalculatorComponent />
                </div>
              </form>
            </div>
          </div>
        </div>
        <style>{"body { background-color: #f5f5f7; }"}</style>
      </>
    );
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
