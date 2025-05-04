function getMood(createdAt) {
    const now = new Date();
    const timeDiff = (now - new Date(createdAt)) / (1000 * 60 * 60 * 24); // in days
  
    if (timeDiff < 1) return 'Happy';
    if (timeDiff <= 3) return 'Excited';
    return 'Sad';
  }
  
  module.exports = { getMood };
  