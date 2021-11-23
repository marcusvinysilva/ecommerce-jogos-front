export const JwtHandler = {
    JWT_KEY: "9c8d9e1d80fc923ca7d532e46a3d606f",

    onChangeEvent: new CustomEvent("onJwtChange"),

    onChange: () => {
        window.dispatchEvent(JwtHandler.onChangeEvent);
    },

    setJwt: value => {
        localStorage.setItem(JwtHandler.JWT_KEY, value);

        JwtHandler.onChange();
    },

    clearJwt: () => {
        localStorage.removeItem(JwtHandler.JWT_KEY);

        JwtHandler.onChange();
    },

    getJwt: () => {
        return localStorage.getItem(JwtHandler.JWT_KEY);
    },

    isJwtValid: () => Boolean(JwtHandler.getJwt()),
};