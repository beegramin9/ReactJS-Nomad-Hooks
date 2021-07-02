export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
      /* Array.isArray(parameter) 파라미터가 array인지 아닌지
      아무것도 return 안 하면 함수를 죽이는 것과 같다 */
      return;
    }
    return {
      /* 인덱스를 가져오는 코드 */
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };
  