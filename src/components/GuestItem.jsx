import PropTypes from 'prop-types'
import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import DisplayCard from "./shared/DisplayCard";
import GuestContext from "../context/GuestContext";

function GuestItem({ item }) {
  const { deleteGuest, editGuest } = useContext(GuestContext);

  return (
    <>
      <DisplayCard>
        <div className="guest">
          <div className="guest-item">
            {item.firstName} {item.lastName}
          </div>
          <div>
            <button 
            onClick={() => editGuest(item)}
            className="guest-edit">
              <FaEdit color="#2C3E50" />
            </button>

            <button
              onClick={() => deleteGuest(item.id)}
              className="guest-delete"
            >
              <FaTimes color="red" />
            </button>
          </div>
        </div>
      </DisplayCard>
    </>
  );
}

GuestItem.propTypes ={
  item: PropTypes.object.isRequired,
}

export default GuestItem;
