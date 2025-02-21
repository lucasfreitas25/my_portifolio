
const useRedirect = (url) => {
  // Redireciona para a URL fornecida
  const redirectTo = () => {
    window.location.href = url;
  };

  return redirectTo;
};

export default useRedirect;
