import { PrismaClient } from "@prisma/client";
import { organizationData } from "../src/data/organizationData";
import { leadershipData } from "../src/data/leadershipData";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // 1. Seed Departments and Employees
  for (const dept of organizationData) {
    await prisma.department.upsert({
      where: { name: dept.name },
      update: {},
      create: {
        name: dept.name,
        employees: {
          create: dept.employees.map((emp) => ({
            firstName: emp.firstName,
            lastName: emp.lastName || null,
          })),
        },
      },
    });
  }

  // 2. Seed Leadership Roles
  for (const leader of leadershipData) {
    await prisma.role.upsert({
      where: { title: leader.role },
      update: {},
      create: {
        name: leader.name,
        title: leader.role,
      },
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
