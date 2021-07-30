import * as React from "react";

const isBottom = (ref) => {
    if (!ref.current) return false;
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const InfiniteScroll = ({
                            onBottomHit,
                            isLoading,
                            hasMoreData,
                            loadOnMount,
                            children,
                        }) => {
    const [initialLoad, setInitialLoad] = React.useState(true);
    const contentRef = React.useRef(null);

    React.useEffect(() => {
        if (loadOnMount && initialLoad) {
            onBottomHit();
            setInitialLoad(false);
        }
    }, [onBottomHit, loadOnMount, initialLoad]);

    React.useEffect(() => {
        const onScroll = () => {
            if (!isLoading && hasMoreData && isBottom(contentRef)) {
                onBottomHit();
            }
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [onBottomHit, isLoading, hasMoreData]);

    return <div ref={contentRef}>{children}</div>;
};
export default InfiniteScroll;