// src/utils/helpers.js

    export const formatDate = (isoDate) => {
      if (!isoDate) return 'N/A';
      const date = new Date(isoDate);
      return date.toLocaleDateString(); // Only date part
    };

  
  export const capitalize = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  };
  
  export const getMoodColor = (mood) => {
    switch (mood) {
      case 'Happy': return 'green';
      case 'Excited': return 'orange';
      case 'Sad': return 'red';
      default: return 'gray';
    }
  };
  