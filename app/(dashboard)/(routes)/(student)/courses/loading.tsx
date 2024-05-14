const CourseLoading = () => {
    setTimeout(() => {
        console.log('Delayed log after 2 seconds');
    }, 20000)
    return (

        <div className="fixed top-0 h-screen w-full bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center z-50">
            <div className="spinner">
                sdfsfsfsdfffffff
            </div>
        </div>
    );
}

export default CourseLoading;