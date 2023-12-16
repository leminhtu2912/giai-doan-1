Component
  Một trong những khái niệm quan trọng trước khi học reactjs đó là component.
  Component một khối đóng gói, bên trong gồm các thẻ html, props, state ... hiểu đơn giản là một thẻ html mình tự định nghĩa ra đế đóng gói một component lại. Mỗi component này sẽ có mỗi chức năng, mục đích riêng biệt để ta có thể quản lý cũng như xử lý dữ liệu dễ dàng hơn.
  Đây là 1 nền tảng của reactjs, Với một trang web thông thường có chung một trang lớn, một trang lớn có nhiều component, điều này làm ta sẽ dễ bị nhầm lẫn giữa các component, ko thể hiện rõ được chức năng của từng component. Vì vậy bạn nên chuyển đổi html thông thường sang dạng component. Một trang web được chia nhỏ ra làm nhiều component để ta dễ quản lý và xử lý dữ liệu cho mỗi component. Nếu ta ko chia nhỏ ra các component thì việc xử lý dữ liệu sẽ khá phức tạp và rắc rối. Vì component đc viết bằng js nên bạn có thể dễ dang truyền dữ liệu cũng như xử lý dữ liệu ở đây.

Ví dụ:
  Ta có 1 component với chức năng làm menu cho trang web của chúng ta.
class Nav extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
   }
}

export default Nav;
  Ở đây mình tạo một component tên là Nav có chức năng là để làm menu cho page của mình.

Chú ý:
  Theo quy định của Reactjs thì không có chứa 2 thẻ html ngang hàng với nhau. Nếu có 2 thẻ ngang hàng nhau thì cần có thẻ cha bọc bên ngoài.

Ví dụ:
class NewComponent extends Component {
   render() {
      return (
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <div className="alert alert-secondary" role="alert">
          This is a secondary alert—check it out!
        </div>
      );
   }
}

export default NewComponent;
Cách viết trên là 1 ví dụ sai về lỗi mà mình nêu trên. Để có 1 component chuẩn thì trong trường hợp này mình sẽ gộp 2 thẻ div ngang hàng vài 1 div lớn.
class NewComponent extends Component {
   render() {
      return (
         <div>
            <div className="alert alert-primary" role="alert">
              This is a primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
              This is a secondary alert—check it out!
            </div>
         </div>
      );
   }
}

export default NewComponent;

Có 4 cách để chúng ta có thể tạo nên 1 component:
•	Kiểu hàm function bình thường
•	Function không tên. Anonymous function
•	Arrow function
•	Class
Tùy vào mục đích ta sẽ sử dụng các cách cho hợp lý.
Thông thường những component có chức năng riêng sẽ có một class riêng và ta sẽ sử dụng cách 4 để tạo nên một component.
.
"Render" là gì
Render là 1 quá trình xử lí của React yêu cầu các components trả về mô tả các thành phần UI trong component đó, dựa trên sự kết hợp của props và state.
Tổng quan quá trình Render
Trong quá trình render, React sẽ bắt đầu với root component tree và lặp dần xuống dưới các component con để tìm ra những component đã được đã đánh dấu là cần cập nhật. Với mỗi component được đánh dấu này, React sẽ chạy classComponentInstance.render() (đối với các class-component) hoặc là chạy FunctionComponent() (đối với các functional-component) để lấy được output của quá trình render.
Render output của 1 component thường được viết bằng JSX, trong quá trình build (compile), JSX sẽ được convert thành các hàm React.createElement(). createElement trả về React elements (hay còn được biết đến với tên "Virtual DOM"), dưới dạng plain JS Object - cung cấp mô tả về cấu trúc của UI Component. Ví dụ:
// Đây là JSX:
return <SomeComponent a={42} b="testing">Text here</SomeComponent>

// Khi build xong sẽ được convert thành:
return React.createElement(SomeComponent, {a: 42, b: "testing"}, "Text Here")

// Và khi trình duyệt execute compiled code, nó sẽ tạo ra React element object như sau:
{type: SomeComponent, props: {a: 42, b: "testing"}, children: ["Text Here"]}
Sau khi thu thập đủ render output từ component tree (kết quả là 1 React element object), React sẽ so sánh (diff) virtual DOM mới và virtual DOM hiện tại, thu được một tập hợp các thay đổi thực sự cần được cập nhật vào real DOM, quá trình so sánh và tính toán này được gọi là "reconciliation".
React sau đó áp dụng tất cả các thay đổi đã được tính toán ở trên lên cây DOM thật trong một thứ tự đồng bộ (Render Phase và Commit Phases).
Render Phase và Commit Phases
React team chia Rendering Process thành 2 pha (phase):
•	"Render phase" bao gồm tất cả công việc của việc render components và tính toán các thay đổi cần apply
•	"Commit phase" là quá trình áp dụng các thay đổi này vào DOM thật
Sau khi React cập nhật lại DOM thật trong Commit Phase, nó sau đó chạy đồng bộ các methods componentDidMount và componentDidUpdate của class-component, và useLayoutEffect hooks.
React sau đó đặt một khoản thời gian ngắn (timeout), sau khi hết timeout thì nó sẽ chạy tất cả các useEffect hooks. Bước này được gọi là "Passive Event" phase.
Trọng tâm của phần này là hiểu rằng "rendering" không phải là "updating the DOM", một component có thể được render mà không thay đổi gì trên DOM thật. Khi React render component:
•	Nếu component trả về render output giống với lần render trước đó, sẽ không có thay đổi nào cần được áp dụng (lên DOM thật) -> không commit gì cả.
•	In Concurrent Mode, React might end up rendering a component multiple times, but throw away the render output each time if other updates invalidate the current work being done
Làm thế nào React handle Renders?
Queuing Renders
Sau khi lần render đầu tiên (initial) được hoàn thành, có một vài cách để kích hoạt React render trên một vài component (đánh dấu là component đó cần update và React sẽ thực hiện quá trình re-render sau đó):
•	Class components:
o	this.setState()
o	this.forceUpdate()
•	Functional components:
o	useState setters
o	useReducer dispatches
•	Khác:
o	Gọi ReactDOM.render(<App/>) lại lần nữa, tương đương với việc gọi forceUpdate() tại component root.
Render Behavior tiêu chuẩn
Có một điều quan trọng phải nhớ:
React's default behavior là khi có một component cha render, React sẽ lặp đệ quy và render tất cả các component con của component đó!
Ví dụ, giả sử ta có một component tree A > B > C > D, và chúng ta đã xong initial render (đã show ra UI). Sau đó, user click vào một button trong B - làm tăng một biến đếm trong component B:
•	Ta gọi setState() trong B, làm B bị đánh dấu là cần cập nhật
•	React bắt đầu chạy render từ top của component tree
•	React thấy rằng A không bị đánh dấu là cần cập nhật nên bỏ qua nó
•	React thấy rằng B bị đánh dấu cần cập nhật và chạy hàm render của B. B trả về C.
•	C không được đánh dầu là cần cập nhật. Tuy nhiên, vì parent component của nó là B vừa mới re-render, React sẽ render lại child component C. C trả về D.
•	D tương tự như trên, dù không được đánh dấu là cần cập nhật nhưng vì C re-render nên React cũng thực hiện re-render lại D.
Một lần nữa:
Render một component sẽ, mặc định, khiến cho tất cả các component con bên trong nó re-render luôn!
Một lưu ý khác:
Trong quá trình render bình thường, React không quan tâm về "props changed" - nó sẽ re-render tất cả các component con vô điều kiện chỉ vì component cha của chúng bị re-render
Điều này có nghĩa là gọi setState() trong root <App> component, sẽ khiến cho tất cả các component trong App bị re-render.
Rất có thể hầu hết các components trong component tree sẽ trả về y chang render output như lần trước đó, và vì thế React không cần cập nhật gì lên real DOM. Nhưng, React vẫn sẽ phải làm công việc là chạy hàm render trên mỗi component, đợi render output và so sánh render output này với render output của lần trước đó - những thứ này sẽ tốn thời gian và năng lực xử lí của CPU.
Component Types và Reconciliation
Như đã được mô tả trong "Reconciliation" docs page, logic render cuả React so sánh các element dựa trên type field đầu tiên, dùng phép so sánh ===. Nếu một element trong một vị trí thay đổi thành một type khác, như từ <div> thành <span> hay là từ <ComponentA> sang <ComponentB>, React sẽ tăng tốc quá trình so sánh bằng cách "thôi méo so sánh tiếp nữa" mà giả định rằng cả component đã hay đổi. Kết quả là, React sẽ xóa bỏ tất cả component render output hiện tại, gồm tất cả các DOM nodes (DOM thật), và tạo lại nó từ đầu với một component instance mới.
Điều này có nghĩa rằng bạn không bao giờ được tạo một component type mới trong hàm render() (hoặc trong function body của functional component), bởi vì khi bạn tạo một component type mới, nó có một reference mới (vì nó là object mà), điều này sẽ khiến React liên tục xóa và tạo lại cả component sau mỗi lần render.
Nói cách khác, đừng làm thế này:
function ParentComponent() {
  // Dòng này sẽ tạo ra một referrence của ChildComponent mỗi lần render!
  function ChildComponent() {}
  
  return <ChildComponent />
}
Thay vào đó, luôn define component tách biệt:
// Dòng này sẽ chỉ tạo ra 1 component type
function ChildComponent() {}
  
function ParentComponent() {
  return <ChildComponent />
}
Giới thiệu về React Hooks
Vậy thì React Hooks thực sự nó là gì!?
Hooks chính thức được giới thiệu trong phiên bản React 16.8. Nó cho phép chúng ta sử dụng state và các tính năng khác của React mà không phải dùng đến Class


Điều này có nghĩa là từ phiên bản 16.8 trở đi, chúng ta đã có thể sử dụng state trong stateless (functional) component, việc mà từ trước tới nay ta bắt buộc phải khai báo Class. Có thể thấy, các nhà phát triển React họ đang muốn hướng đến 1 tương lai Functional Programming thay vì sử dụng những Class mà chỉ nghe cái tên thôi là ta đã nghĩ ngay đến OOP. Cộng với việc không sử dụng Class kế thừa từ React Component nữa nên giờ đây kích thước bundle sẽ được giảm đáng kể bởi code sử dụng Hooks.
Để có thể thay thế được Class thì React Hooks cung cấp cho chúng ta một bộ các built-in Hooks, giúp chúng ta sử dụng được các thành phần tạo nên React, có 2 loại built-in đó là: Basic Hooks và Additional Hooks
Basic Hooks
useState
Cái tên nói lên tất cả   hàm này nhận đầu vào là giá trị khởi tạo của 1 state và trả ra 1 mảng gồm có 2 phần tử, phần tử đầu tiên là state hiện tại, phần tử thứ 2 là 1 function dùng để update state (giống như hàm setState cũ vậy). Ví dụ:
Ngày trước dùng Class thì viết như này
constructor(props) {
    super(props);
    this.state = { isLoading: false }
 }

 onClick() {
     this.setState({
         isLoading: true,
     })
 }
Còn bây giờ thì chỉ cần viết ngắn gọn như này
const [isLoading, setLoading] = useState(false);

onClick() {
     setLoading(true)
 }
Khi muốn update state cho isLoading là true thì chỉ cần gọi đến hàm setLoading(true) là Ok, rất đơn giản và gọn nhẹ phải không nào   Nếu như bạn đang làm việc với React-Redux để quản lý State thì mình khuyên bạn chỉ nên sử dụng useState để quản lý các UI State (là những state có giá trị boolean nhằm mục đích render ra UI) để tránh việc conflict với cả Redux State và maintain sau này.
useEffect
Như đã giới thiệu trong phần mở đầu về sự phức tạp trong các hàm LifeCycle thì để thay thế nó chúng ta sẽ có hàm useEffect. Nó giúp chúng ta xử lý các side effects, useEffect sẽ tương đương với các hàm componentDidMount, componentDidUpdate và componentWillUnMount trong LifeCycle. Ví dụ:
import { callApi } from './actions'

const App = ({ callApi, data }) => {
  useEffect(() => {
    callApi('some_payload_')
  }, [])
  return(
    <div>
         {data.map(item => {// do something })}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  callApi: (keyword) => dispatch(callApi)
})

export default connect({}, mapDispatchToProps)(App)
Có thể thấy trong useEffect ta cũng có thể thực hiện công việc call API giống như hàm ComponentDidMount ngày trước. Để tránh việc hàm useEffect luôn chạy vào mỗi khi có thay đổi State thì ta có thể truyền vào tham số thứ 2 trong useEffect đó là 1 array, trong array này ta có thể truyền vào đó những giá trị mà useEffect sẽ subcribe nó, tức là chỉ khi nào những giá trị đó thay đổi thì hàm useEffect mới được thực thi. Hoặc bạn cũng có thể truyền vào 1 array rỗng thì khi đó nó sẽ chỉ chạy 1 lần đầu tiên sau khi render giống với hàm ComponentDidMount Ví dụ:
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source], // giá trị được subcrive
);
Còn 1 vấn đề nữa đó là trong hàm useEffect ta có thể return về 1 function (chú ý là bắt buộc phải return về function) thì khi làm điều này nó sẽ tương đương với việc ta sử dụng hàm LifeCycle componentWillUnMount
Tổng kết lại thì đây là những gì ta cần nhớ trong hàm useEffect:
useEffect(() => {
  // almost same as componentDidMount
  console.log('mounted!');
  return () => {
    // almost same as componentWillUnmount
    console.log('unmount!');
  };
}, []);
Additional Hooks
useReducer
Thực tế khi sử dụng useState thì nó sẽ trả về 1 phiên bản đơn giản của useReducer, vậy nên chúng ta có thể coi useReducer như một phiên bản nâng cao hơn dùng để thay thế cho việc sử dụng useState. Nếu đã làm việc với React-Redux thì chắc hẳn bạn sẽ dễ dàng nhận ra flow quen thuộc này phải không nào. Giống như reducer trong Redux thì useReducer cũng nhận vào một reducer dạng (state, action) và trả ra một newState. Khi sử dụng chúng ta sẽ nhận được một cặp bao gồm current state và dispatch function. Ví dụ:
const initialState = {count: 0}

function reducer(state, action) {
  const [count, setCount] = useState(0);
  switch (action.type) {
    case 'INCREMENT':
      return setCount( count + 1);
    case 'DECREMENT':
      return setCount( count - 1);
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <StyledLogo src={logo} count={count}/>
      <Count count={count} />
      <div style={{display: 'flex'}}>
        <button onClick={() => dispatch({type: 'DECREMENT'})}> - </button>
        <button onClick={() => dispatch({type: 'INCREMENT'})}> + </button>
      </div>
    </>
  )
}
useMemo
useMemo giúp ta kiểm soát việc được render dư thừa của các component con, nó khá giống với hàm shouldComponentUpdate trong LifeCycle. Bằng cách truyền vào 1 tham số thứ 2 thì chỉ khi tham số này thay đổi thì thằng useMemo mới được thực thi. Ví dụ:
•	Không sử dụng useMemo:
const NotUsingMemo = ({ products }) => {
  const soldoutProducts = products.filter(x => x.isSoldout === true); // soldoutProducts sẽ luôn luôn thực thi mỗi khi NotUsingMemo được re-render
};
•	Có sử dụng useMemo:
const UsingMemo = ({ products }) => {
  const soldoutProducts = useMemo(
    () => products.filter(x => x.isSoldout === true), // / soldoutProducts sẽ chỉ thực thi khi props products thay đổi
    [products] // watch products
  );
};
useCallback
useCallback có nhiệm vụ tương tự như useMemo nhưng khác ở chỗ function truyền vào useMemo bắt buộc phải ở trong quá trình render trong khi đối với useCallback đó lại là function callback của 1 event nào đó như là onClick chẳng hạn. Ví dụ:
const App = () => {
  const [text, setText] = React.useState('');

  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <Wrap />
    </>
  );
};

const Wrap = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const toggleChecked = useCallback(() => setIsChecked(!isChecked), [
    isChecked
  ]);

  return <Checkbox value={isChecked} onClick={toggleChecked} />;
};

const Checkbox = React.memo(({ value, onClick }) => {
  console.log('Checkbox is renderd!');
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      {value ? '☑' : '□'}
    </div>
  );
});
Trong ví dụ trên ta sử dụng useCallback cho sự kiện onClick, điều này có nghĩa là việc thay đổi giá trị text trong ô Input sẽ không làm component Checkbox bị re-render.

