import { useState, useEffect } from "react";

// هذا الهوك يستقبل البيانات الأصلية (products)
const useFilter = (products) => {
  // 1. تعريف الـ States
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]); // [min, max]

  // 2. الـ useEffect لمراقبة التغييرات
  useEffect(() => {
    applyFilters();
  }, [selectedCategory, priceRange, products]); // أضفنا products للمراقبة

  // 3. دالة تطبيق الفلتر
  const applyFilters = () => {
    let updatedList = products;

    // فلتر الكاتيجوري
    if (selectedCategory !== "All") {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // فلتر السعر
    updatedList = updatedList.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setFilteredProducts(updatedList);
  };

  // 4. الهاندلرز (Handlers)
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  // 5. إرجاع القيم والدوال اللي هنحتاجها في ملف التصميم
  return {
    filteredProducts,
    selectedCategory,
    priceRange,
    handleCategoryChange,
    handleSliderChange,
  };
};

export default useFilter;
