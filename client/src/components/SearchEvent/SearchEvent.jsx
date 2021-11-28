import { useState } from "react";

export default function SearchEvent(props) {
  const [search, setSearch] = useState({
    search: "",
    location: "",
    virtual: null,
  });

  let locations = [];

  if (props.events && props.events.length > 0) {
    props.events.map((event) => {
      if (!locations.includes(event.affiliate.location)) {
        locations.push(event.affiliate.location);
      }
      return locations;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let result = [...props.events];
    if (search.search.length > 0) {
      result = result.filter((each) =>
        each.title.toLowerCase().includes(search.search.toLowerCase())
      );
    }
    if (search.location.length > 0) {
      result = result.filter(
        (each) => each.affiliate.location === search.location
      );
    }
    if (search.virtual !== null) {
      result = result.filter((each) => each.virtual === search.virtual);
    }
    props.setDisplay(result);
  }

  function handleChange(event) {
    if (event.target.name !== "virtual") {
      setSearch({
        ...search,
        [event.target.name]: event.target.value,
      });
    } else {
      setSearch({
        ...search,
        virtual: event.target.value === "virtual" ? true : false,
      });
    }
  }

  return (
    <form className="flex w-full my-10" onSubmit={(e) => handleSubmit(e)}>
      <label for="search" />
      <input
        type="text"
        id="search"
        name="search"
        value={search.search}
        autoComplete="off"
        placeholder="Search for Events"
        className="p-3 border border-solid border-aajc-darkgrey flex-shrink w-2/3 text-sm"
        onChange={(event) => handleChange(event)}
      />
      <label for="location" />
      <select
        name="location"
        id="location"
        value={search.location}
        className="p-3 border-t border-r border-b border-solid border-aajc-darkgrey text-sm w-1/6"
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
        name="virtual"
        className="p-3 border-t border-r border-b border-solid border-aajc-darkgrey text-sm w-1/6"
        onChange={(event) => handleChange(event)}
      >
        <option value="" selected disabled hidden>
          Type
        </option>
        <option value="in_person">In-Person</option>
        <option value="virtual">Virtual</option>
      </select>
      <button
        className="uppercase text-xs bg-aajc-darkgrey text-white px-9 py-2 border border-aajc-darkgrey border-solid"
        type="submit"
      >
        Search
      </button>
      <button
        className="uppercase text-xs px-4 py-2 border border-aajc-darkgrey border-solid"
        onClick={() =>
          setSearch({
            search: "",
            location: "",
            virtual: null,
          })
        }
      >
        Reset
      </button>
    </form>
  );
}
