import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import './main.css'
const Pigination = ({ dataReturned, setPagination }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

  });
  
  function nextBtn() {
    setPagination((prev) => {
      return prev + 1;
    });
  }
  function prevBtn() {
    setPagination((prev) => {
      return prev + 1;
    });
  }
  return (
    <div cla>
      <style JSX>
        {`.btn-primary,.btn-primary:hover,.btn-primary:focus {
  color: #fff;
  background-color: #a42618;
  border-color: #a42618;
  border-radius:30px

}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color:#a42618;
  border-color: #a42618;
border-radius:30px}

  .page-link,.page-link:hover{
    color:#a42618
    border-radius:30px
  }
  .pagination{
    border-radius:30px
  }


`}
      </style>

      <ReactPaginate
        className="pagination d-flex justify-content-center gap-2 my-5"
        pageCount={dataReturned?.movie_count}
        nextLabel="Next"
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        paginationSize="1"
        pageLinkClassName="page-link"
        activeClassName=" active"
        nextLinkClassName="btn btn-primary"
        previousLinkClassName="btn btn-primary"
        onPageChange={(data) => {
          setPagination(data.selected + 1);
          window.scrollTo({ top: 0, left: 0 });
        }}
      />
     
     
    </div>
  );
};

export default Pigination;
