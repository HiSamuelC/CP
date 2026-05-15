import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main(){
 const hash = await bcrypt.hash('password123',10);
 await prisma.user.createMany({data:[
  {email:'admin@example.com',passwordHash:hash,name:'Admin',role:Role.ADMIN},
  {email:'cpteam@example.com',passwordHash:hash,name:'CP Team',role:Role.CP_TEAM},
  {email:'member@example.com',passwordHash:hash,name:'CP Member',role:Role.CP_MEMBER}
 ], skipDuplicates:true});
}
main().finally(()=>prisma.$disconnect());
