export default function RentalDetails() {
    return (
      <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Unitiled</h2>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Honda Dio</h3>
          <div className="space-y-2">
            <p className="font-medium">Rent Amount: <span className="font-normal"># 800</span></p>
            <p className="font-medium">Refundable Deposit: <span className="font-normal"># 2000</span></p>
          </div>
        </div>
  
        <div className="flex items-center mb-6">
          <input type="checkbox" className="w-4 h-4" />
          <label className="ml-2">Fixed quotation date: Rental Terms</label>
        </div>
  
        <hr className="mb-6"/>
  
        <div className="mb-8">
          <h4 className="font-bold mb-4">Subtotal</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Vehicle Rental Cost</span>
              <span>¥ 468</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Booking Amount:</span>
              <span>¥ 468</span>
            </div>
            <div className="text-sm text-gray-500">
              <p>Cost (1x€ applied)</p>
              <p>¥ 68</p>
              <p>$051 (1x€ applied)</p>
              <p>¥ 66</p>
            </div>
          </div>
        </div>
  
        <div className="border-t pt-4 mb-8">
          <div className="flex justify-between font-bold text-lg">
            <span>Payable Amount</span>
            <span>¥ 800</span>
          </div>
        </div>
  
        <div className="mb-8">
          <h4 className="font-bold mb-3">Cancellation policy</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Confirm that you are above 18 years of age and you agree to all formula & conditions.</li>
            <li>The original billing scheme needs to be submitted at the time of period end to serve will be returned at the time of dropping the vehicle.</li>
          </ul>
        </div>
  
        <div className="mb-8">
          <h4 className="font-bold mb-4">Customer Reviews of this Ribbon Rental</h4>
          <table className="w-full mb-4">
            <tbody>
              <tr><td>5 stores</td><td>905</td></tr>
              <tr><td>4.1 out of</td><td>5 stores</td><td>252</td></tr>
              <tr><td>3 stores</td><td>184</td><td>160</td></tr>
              <tr><td>2 stores</td><td>180</td><td>36</td></tr>
            </tbody>
          </table>
  
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">Reviews (1)</h5>
              <p className="font-medium">Vorun Mehko</p>
              <p className="font-medium">Vorun Mehko</p>
            </div>
          </div>
        </div>
  
        <div className="mb-8">
          <h5 className="font-semibold">Reviews (1)</h5>
          <p className="font-medium">Vorun Mehko</p>
          <p className="font-medium">Vorun Mehko</p>
        </div>
  
        <div>
          <p className="font-bold">Total PM</p>
          <p className="font-bold">V17/2025</p>
        </div>
      </div>
    );
  }