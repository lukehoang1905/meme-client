import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import PaginationMeme from "../components/PaginationMeme";
import MemeList from "../components/MemeList";
import { useDispatch, useSelector } from "react-redux";
import memeActions from "../redux/actions/meme.actions";
import ClipLoader from "react-spinners/ClipLoader";
const GalleryPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.meme.loading);
  const totalPageNum = useSelector((state) => state.meme.totalPageNum);
  const memes = useSelector((state) => state.meme.memes);

  useEffect(() => {
    dispatch(memeActions.memesRequest(pageNum));
  }, [dispatch, pageNum]);
  const showDetail = () => {};

  return (
    <Container>
      <Row>
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            <PaginationMeme
              pageNum={pageNum}
              setPageNum={setPageNum}
              totalPageNum={totalPageNum}
              loading={loading}
            />
            <MemeList memes={memes} showDetail={showDetail} />
          </>
        )}
      </Row>
    </Container>
  );
};

export default GalleryPage;
