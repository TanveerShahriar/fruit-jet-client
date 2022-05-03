import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = () => {
            const email = user?.user?.email;
            const url = "http://localhost:5000/login";
            if (email) {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                })
                    .then(res => res.json())
                    .then(data => {
                        setToken(data.accessToken);
                        localStorage.setItem("accessToken", data.accessToken)
                    });
            }
        };
        getToken();
    }, [user]);
    return [token];
};

export default useToken;
