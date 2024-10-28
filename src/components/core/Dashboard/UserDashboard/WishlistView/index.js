import { VscAdd } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"

import DetailsTable from "./viewDetails"
import IconBtn
 from "../../../../Common/IconBtn"
export default function WishListView({ type }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">WishList</h1>
      </div>
      <DetailsTable type={type} />
    </div>
  )
}