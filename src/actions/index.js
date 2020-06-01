export const checkPass = (user, pass) => ({
    type: 'CHECK_PASS',
    payload: {
        user,
        pass
    }
});