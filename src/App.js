import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <table border=""className='blackbackground' >
      <tr>
        <th className='blackbackground2'> RNo</th>
        <th>NAME</th>
        <th className='blackbackground2'>last Name</th>
        <th>image</th>
      </tr>
      <tr>
        <td>01</td>
        <td className='blackbackground2'>Shardul</td>
        <td>Pawar</td>
        <td className='blackbackground2'><img src="../assets/car1.webp"width="200"/></td>
      </tr>
      <tr>
        <td className='blackbackground2'>02</td>
        <td>Gaurav</td>
        <td className='blackbackground2'>Pawar</td>
        <td><img src="../assets/iphone13.avif" width="70" height="80"/></td>
      </tr>
      <tr>
        <td>03</td>
        <td className='blackbackground2'>Sharvani</td>
        <td>Gunjal</td>
        <td className='blackbackground2'><img src="../assets/iphone14.avif" width="70"height="80"/></td>
      </tr>
      <tr>
        <td className='blackbackground2'>04</td>
        <td>Trusha</td>
        <td className='blackbackground2'>Nimse</td>
        <td><img src="../assets/iphone15.avif" width="50"/></td>
      </tr>
      <tr>
        <td>05</td>
        <td className='blackbackground2'>Rutuja</td>
        <td>Date</td>
        <td className='blackbackground2'><img src="../assets/pic3.jpg" width="50"/></td>
      </tr>
    </table>
  );
}

export default App;
