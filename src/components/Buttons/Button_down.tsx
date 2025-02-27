const useRedirect = (url) => {
  const redirectTo = () => {
    window.open(url, "_blank"); 
  };

  return redirectTo;
};

export default useRedirect;
