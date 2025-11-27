export const setupAccordion = (detailsRef) => {
  return (index) => {
    const current = detailsRef.current[index];
    if (current.open) {
      detailsRef.current.forEach((detail, i) => {
        if (i !== index) {
          detail.open = false;
        }
      });
    }
  };
};
