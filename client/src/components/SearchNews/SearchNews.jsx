import { useState } from "react";

export default function SearchNews(props) {
  const [search, setSearch] = useState({
    search: "",
    location: "",
    pressRelease: null,
  });

  let locations = ["All"];

  if (props.news && props.news.length > 0) {
    props.news.forEach((eachNews) => {
      eachNews.affiliate.forEach((eachAffiliate) => {
        if (!locations.includes(eachAffiliate.location)) {
          locations.push(eachAffiliate.location);
        }
        return locations;
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let result = [...props.news];
    if (search.search.length > 0) {
      result = result.filter((each) =>
        each.title.toLowerCase().includes(search.search.toLowerCase())
      );
    }
    if (search.location.length > 0) {
      if (search.location === "All") {
        result = result.filter((each) => each.affiliate.length === 5);
      } else {
        result = result.filter((each) => {
          let affiliateLocation = [];
          each.affiliate.forEach((eachAffiliate) => {
            affiliateLocation.push(eachAffiliate.location);
          });
          if (affiliateLocation.includes(search.location)) {
            return true;
          }
          return false;
        });
      }
    }
    if (search.pressRelease !== null) {
      result = result.filter(
        (each) => each.press_release === search.pressRelease
      );
    }
    props.setDisplay(result);
    props.setPageNumber(0);
  }

  function handleChange(event) {
    if (event.target.name !== "pressRelease") {
      setSearch({
        ...search,
        [event.target.name]: event.target.value,
      });
    } else {
      setSearch({
        ...search,
        pressRelease: event.target.value === "pressRelease" ? true : false,
      });
    }
  }

  return (
    <form
      className="flex w-full my-10 flex-col sm:flex-row"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label for="search" />
      <input
        type="text"
        id="search"
        name="search"
        value={search.search}
        autoComplete="off"
        placeholder="Search for News & Press Releases"
        className="p-3 sm:border border-t border-l border-r border-solid border-dark flex-shrink sm:w-2/3 text-sm"
        onChange={(event) => handleChange(event)}
      />
      <label for="location" />
      <select
        name="location"
        id="location"
        value={search.location}
        className="p-3 border sm:border-t sm:border-r sm:border-b border-solid border-dark text-sm sm:w-1/6"
        onChange={(event) => handleChange(event)}
      >
        <option
          value=""
          selected
          disabled
          hidden
          onChange={(event) => handleChange(event)}
        >
          Location
        </option>
        {locations.map((location) => (
          <option value={location}>{location}</option>
        ))}
      </select>
      <label for="type" />
      <select
        id="type"
        name="pressRelease"
        className="p-3 border-r border-l sm:border-t sm:border-r sm:border-b border-solid border-dark text-sm sm:w-1/6"
        onChange={(event) => handleChange(event)}
      >
        <option value="" selected disabled hidden>
          Type
        </option>
        <option value="news">News</option>
        <option value="pressRelease">Press Releases</option>
      </select>
      <button
        className="uppercase text-xs bg-aajc-darkgrey text-white px-9 py-2 border border-dark border-solid"
        type="submit"
      >
        Search
      </button>
      <button
        className="uppercase text-xs px-4 py-2 border border-dark border-solid"
        onClick={() =>
          setSearch({
            search: "",
            location: "",
            pressRelease: null,
          })
        }
      >
        Reset
      </button>
    </form>
  );
}
