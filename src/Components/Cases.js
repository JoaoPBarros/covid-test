import { useEffect, useState } from 'react';


function Cases() {
  const [info, setInfo] = useState([]);

    useEffect(() => {
      async function getApi() {
        const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1');
        const json = await response.json();
        setInfo(json);
        console.log(json);
      }
      getApi();
  }, [info, setInfo]);



  if (info === []) return <h2>Loading...</h2>
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Uid</th>
            <th>UF</th>
            <th>State</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Suspects</th>
            <th>Refuses</th>
            <th>Broadcast</th>
            <th>Comments</th>
            <th>Datetime</th>
          </tr>
        </thead>
         <tbody>
        { info.map((dado, indice) => {
          console.log(info)
            return (
              <tr key={ indice }>
                <td>{dado.uid}</td>
                <td>{dado.uf}</td>
                <td>{dado.state}</td>
                <td>{dado.cases}</td>
                <td>{dado.deaths}</td>
                <td>{dado.suspects}</td>
                <td>{dado.refuses}</td>
                <td>{dado.broadcast}</td>
                <td>{dado.comments}</td>
                <td>{dado.datetime}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Cases;
