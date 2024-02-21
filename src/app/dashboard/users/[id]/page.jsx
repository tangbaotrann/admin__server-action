import UserDetail from "@/app/ui/dashboard/users/[id]/UserDetail";

function SingleUser({ params }) {
  return <UserDetail params={params} />;
}

export default SingleUser;
