import React from "react";
import { checkToken } from "../../utilities/users-service";

function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When Login Expires</button>
    </>
  );
}

export default OrderHistoryPage;
