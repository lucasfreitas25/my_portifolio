const useRedirect = (url: string | URL | undefined) => {
  const redirectTo = () => {
    window.open(url, "_blank"); 
  };

  return redirectTo;
};

export default useRedirect;
