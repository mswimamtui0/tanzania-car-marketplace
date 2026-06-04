import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
try {
const body = await req.json();


const user = await prisma.user.create({
  data: {
    name: body.name,
    email: body.email,
    password: body.password,
    role: body.role,
    companyName: body.companyName,
    yardName: body.yardName,
    phone: body.phone,
    address: body.address,
  },
});

return Response.json(user);


} catch (error) {
console.error(error);


return Response.json(
  { error: String(error) },
  { status: 500 }
);


}
}
