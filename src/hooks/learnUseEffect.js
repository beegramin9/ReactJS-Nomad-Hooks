/* useEffect는
componentWillUnmount, Didmount, willUpdate와 비슷하다. 
주로 API에서 데이터를 */
function App() {
    const sayHello = () => console.log("hello");
  
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
  
    /* useEffect(함수), 첫번째 함수 인자만 주면
    render(이제는 Hook을 쓰니까 return) 이 끝나자마자 실행됨 
    버튼 누를 때마다 hello가 콘솔에
    즉, 맨 처음 렌더링 이후의 didMount와 그 이후에 업데이트 렌더링 이후 didUpdate가
    하나로 합쳐졌다고 생각하면 됨*/
  
    /* useEffect(함수, [number])
    맨 처음 render할 땐 함수를 실행시키고 다음부터는
    array 안의 변수가 바뀔 때에만 실행된다
    만약 number가 바뀔때만 hello가 나오게 하려면? [number]만 써주면 됨
    => array 원소가 하나일때를 말하는 것
    맨 처음에만 실행하고 싶으면 빈 어레이(디펜던시) [] 만 주면 된다.
    */
    useEffect(sayHello, [number]);
  
    return (
      <div className="App">
        <div>Hi</div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      </div>
    );
  }