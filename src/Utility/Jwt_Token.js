export const jwtToken = (user) => {
    const uid = user?.uid;
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ uid }),
    }).then(res => res.json()).then(data => {
        if (data.token) {
            localStorage.setItem('assignment-11_Token', data.token)
            setUser(user);
            toast.success('Successfully Login');
            setError('');
            navigate(from, { replace: true });
        }

    })
}