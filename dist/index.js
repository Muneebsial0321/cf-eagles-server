"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "some message" });
});
// Blockchain configuration
// const provider:ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL); // Infura URL or another provider
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || '', provider);
// API Routes
// 1. Connect Wallet and Authenticate User
// app.post('/api/auth/login', async (req: Request, res: Response) => {
//     const { walletAddress, signature } = req.body;
//     const message = "Sign this message to log in.";
//     try {
//         // Verify the signature
//         const recoveredAddress = ethers.utils.verifyMessage(message, signature);
//         if (recoveredAddress.toLowerCase() === walletAddress.toLowerCase()) {
//             return res.status(200).json({ success: true, message: 'Authentication successful!' });
//         } else {
//             return res.status(401).json({ success: false, message: 'Invalid signature!' });
//         }
//     } catch (error) {
//         console.error('Error verifying signature:', error);
//         return res.status(500).json({ success: false, message: 'Internal server error.' });
//     }
// });
// 2. Fetch ETH Balance
// app.get('/api/balance/:walletAddress', async (req: Request, res: Response) => {
//     const { walletAddress } = req.params;
//     try {
//         const balance = await provider.getBalance(walletAddress);
//         const ethBalance = ethers.utils.formatEther(balance);
//         return res.status(200).json({ success: true, balance: ethBalance });
//     } catch (error) {
//         console.error('Error fetching balance:', error);
//         return res.status(500).json({ success: false, message: 'Could not fetch balance.' });
//     }
// });
// 3. Fetch Token Balance (e.g., ERC-20)
// app.get('/api/token-balance/:walletAddress/:tokenAddress', async (req: Request, res: Response) => {
//     const { walletAddress, tokenAddress } = req.params;
//     const tokenABI = ["function balanceOf(address owner) view returns (uint256)"];
//     const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
//     try {
//         const balance = await tokenContract.balanceOf(walletAddress);
//         const formattedBalance = ethers.utils.formatUnits(balance, 18); // Assuming 18 decimals
//         return res.status(200).json({ success: true, balance: formattedBalance });
//     } catch (error) {
//         console.error('Error fetching token balance:', error);
//         return res.status(500).json({ success: false, message: 'Could not fetch token balance.' });
//     }
// });
// // 4. Send Transaction
// app.post('/api/transaction', async (req: Request, res: Response) => {
//     const { to, amount } = req.body;
//     try {
//         const tx = await wallet.sendTransaction({
//             to,
//             value: ethers.utils.parseEther(amount),
//         });
//         await tx.wait();
//         return res.status(200).json({ success: true, txHash: tx.hash });
//     } catch (error) {
//         console.error('Error sending transaction:', error);
//         return res.status(500).json({ success: false, message: 'Transaction failed.' });
//     }
// });
// Server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
