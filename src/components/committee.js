import { Table, Container } from "react-bootstrap";

export default function Committee() {
  return (
    <Container>
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <h2>EMC² Core Committee</h2>
        <Table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Gopal Kaul</td>
              <td>President</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Musuku Niharika</td>
              <td>Secretary</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Chinthamalla Shiney</td>
              <td>Vice-President</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Supriya Rathod</td>
              <td>Cultural Head</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Annimalla Manaswini</td>
              <td>Treasurer</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Aniral Rao</td>
              <td>Band Leader</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Krishna Hasitha</td>
              <td>Immediate Past President</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <h2>EMC² Executive Committee</h2>
        <Table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Abdul Ghani</td>
              <td>Promotions Head</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Hussain Shaik</td>
              <td>Graphic Designer</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Kranthi Kiran</td>
              <td>Assistant Band Leader</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Abhinava Karthikeya</td>
              <td>Joint Treasurer</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Keerthana Reddy</td>
              <td>Joint Cultural Head</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Battu Lahari</td>
              <td>Content Writer</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Rohit Nittala</td>
              <td>Joint Secretary</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
