import Header from "../components/Header";

function Login({ csrfToken }) {
  const color = "yellow";

  return (
    <div className="min-h-screen bg-yellow p-4">
      <Header color={color} />
      <div className="h-[calc(100vh-120px)] mt-[70px] flex flex-col justify-between">
        <section className="flex flex-col items-center text-center gap-4 mt-28 md:mt-14">
          <form
            method="post"
            className="bg-dark-blue p-12 rounded-2xl min-w-[320px]"
            action="/api/auth/callback/credentials"
          >
            <input
              id="csrfToken"
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken}
            />
            <label>
              Nom d'utilisateur
              <input
                id="username"
                name="username"
                type="text"
                className="block w-full mb-2"
                placeholder="nom@email.fr"
              />
            </label>
            <label>
              Mot de passe
              <input
                className="block w-full"
                name="password"
                type="password"
                id="password"
              />
            </label>
            <button
              id="credentials-login-btn"
              className="bg-pink mt-6 w-full"
              type="submit"
            >
              Se connecter
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;

const getCsrfTokenAndSetCookies = async ({ res, query }) => {
  // to make it work on Vercel
  let baseUrl = process.env.NEXTAUTH_URL || `https://${process.env.VERCEL_URL}`;
  // capturing the callback url if any, which should include the current domain for security ?
  const callbackUrlIsPresent = typeof query?.callbackUrl === "string";
  const callbackUrlIsValid =
    callbackUrlIsPresent && query?.callbackUrl.startsWith(baseUrl);
  const host = callbackUrlIsValid ? query?.callbackUrl : baseUrl;
  const redirectURL = encodeURIComponent(host);
  // getting both the csrf form token and (next-auth.csrf-token cookie + next-auth.callback-url cookie)
  const csrfUrl = `${baseUrl}/api/auth/csrf?callbackUrl=${redirectURL}`;
  const csrfResponse = await fetch(csrfUrl);
  const { csrfToken } = await csrfResponse.json();
  const { headers } = csrfResponse;
  // placing the cookies
  const [csrfCookie, redirectCookie] = headers.get("set-cookie").split(",");
  res.setHeader("set-cookie", [csrfCookie, redirectCookie]);
  // placing form csrf token
  return csrfToken;
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfTokenAndSetCookies(context),
    },
  };
}
