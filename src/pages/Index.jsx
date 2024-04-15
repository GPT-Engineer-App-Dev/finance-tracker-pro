import React from "react";
import { ChakraProvider, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaList, FaFileExport } from "react-icons/fa";

const NavBar = () => (
  <Box as="nav" bg="blue.500" py={4} px={8} color="white">
    <Box as="ul" display="flex" listStyleType="none" gap={8}>
      <Box as="li">
        <Link to="/">
          <FaHome /> Home
        </Link>
      </Box>
      <Box as="li">
        <Link to="/transactions">
          <FaList /> Transactions
        </Link>
      </Box>
      <Box as="li">
        <Link to="/export">
          <FaFileExport /> Export
        </Link>
      </Box>
    </Box>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.200" py={4} px={8} textAlign="center">
    <Text>&copy; {new Date().getFullYear()} My Budget App. All rights reserved.</Text>
  </Box>
);

const Layout = ({ children }) => (
  <Box>
    <NavBar />
    <Box as="main" py={8} px={12}>
      {children}
    </Box>
    <Footer />
  </Box>
);

const Home = ({ transactions }) => {
  const totalBalance = transactions.reduce((acc, tx) => acc + (tx.type === "income" ? tx.amount : -tx.amount), 0);

  return (
    <Layout>
      <VStack spacing={8}>
        <Heading as="h1">My Budget App</Heading>
        <Box>
          <Heading as="h2" size="xl">
            Total Balance: {totalBalance.toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </Heading>
        </Box>
      </VStack>
    </Layout>
  );
};

const Transactions = () => (
  <Layout>
    <Heading as="h1">Transactions</Heading>
    {/* TODO: Implement Transactions table, filters, add/edit/delete */}
  </Layout>
);

const AddTransaction = () => (
  <Layout>
    <Heading as="h1">Add Transaction</Heading>
    {/* TODO: Implement Add Transaction form */}
  </Layout>
);

const Export = () => (
  <Layout>
    <Heading as="h1">Export</Heading>
    {/* TODO: Implement Export functionality */}
  </Layout>
);

const App = () => {
  const transactions = [
    {
      id: 1,
      date: "2023-04-15",
      amount: 100,
      type: "income",
      category: "Salary",
    },
    {
      id: 2,
      date: "2023-04-20",
      amount: -50,
      type: "expense",
      category: "Groceries",
    },
  ];

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home transactions={transactions} />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/add" element={<AddTransaction />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
