import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Page() {
  return (
    <div>
      <h1>Hello, Anthony!</h1>
      <Link as={NextLink} href="/mood">
        How ya doin, buddy?
      </Link>
    </div>
  );
}
