import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";

function WtachPage() {
    const dispatch = useDispatch();
    // const params = useParams()
    // console.log(params);
    const [searchPramas] = useSearchParams();
    console.log(searchPramas.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="px-5">
            <iframe
                width="1300"
                height="650"
                src={"https://www.youtube.com/embed/" + searchPramas.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}
export default WtachPage;
