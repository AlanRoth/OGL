function useStatusHandler(status, error) {
    if(status === 200) {
        return (
            <>
                <div>Submitted</div>
            </>
        )
    } else if(error) {
        return (
            <>
                <div>
                    {error}
                </div>
            </>
        )
    }
}

export default useStatusHandler;