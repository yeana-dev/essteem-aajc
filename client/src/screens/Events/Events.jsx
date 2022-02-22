import { useState, useEffect } from "react";
import sanityClient from "../../client";
import ReactPaginate from "react-paginate";
import SearchEvent from "../../components/SearchEvent/SearchEvent";
import EventCard from "../../components/EventCard/EventCard";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [display, setDisplay] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "event"]{
      title,
      slug,
      affiliate[]->{name,location},
      mainImage{
        asset->{
          _id,
          url
        },
      },
      date,
      time,
      virtual,
      link,
      description
    }`
      )
      .then((data) => {
        setEvents(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        setDisplay(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
      })
      .catch(console.error);
  }, []);

  const newsPerPage = 5;
  const pagesVisited = pageNumber * newsPerPage;
  const pageCount = Math.ceil(display.length / newsPerPage);
  const changePage = ({ selected }) => {
    window.scrollTo(0, 0);
    setPageNumber(selected);
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-10 py-5">
      <h1 className="font-bold text-2xl ">Attend an Event</h1>
      <SearchEvent
        events={events}
        setDisplay={setDisplay}
        setPageNumber={setPageNumber}
      />
      <div className="w-full flex flex-col gap-10">
        <h2 className="uppercase font-semibold text-lg">Upcoming</h2>
        {display &&
          display
            .slice(pagesVisited, pagesVisited + newsPerPage)
            .map((event, key) => <EventCard key={key} event={event} />)}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActiveBtn"}
      />
    </div>
  );
}
