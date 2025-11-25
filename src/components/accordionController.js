export const setupAccordion = (detailsRef) => {
  return (index) => {
    const current = detailsRef.current[index];
    if (current && current.open) {
      detailsRef.current.forEach((detail, i) => {
        if (i !== index && detail) {
          detail.open = false;
        }
      });
    }
  };
};
