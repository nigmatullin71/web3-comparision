"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/code-block"

export default function Home() {
  const [activeTab, setActiveTab] = useState("libraries")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Web3 Технологии: Сравнение и Анализ</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Tabs defaultValue="libraries" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="libraries">Web3.js vs Ethers.js</TabsTrigger>
            <TabsTrigger value="networks">Ethereum vs BSC vs Polygon</TabsTrigger>
          </TabsList>

          <TabsContent value="libraries" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Сравнение библиотек Web3.js и Ethers.js</CardTitle>
                <CardDescription>
                  Обзор двух популярных JavaScript библиотек для взаимодействия с блокчейном Ethereum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Web3.js</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Web3.js - это оригинальная и наиболее известная библиотека для взаимодействия с блокчейном
                      Ethereum. Разработана Ethereum Foundation и предоставляет полный набор инструментов для работы с
                      Ethereum-совместимыми блокчейнами.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Ethers.js</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Ethers.js - это более современная альтернатива Web3.js, разработанная с фокусом на безопасность,
                      модульность и более чистый API. Библиотека стала популярной благодаря своей простоте использования
                      и хорошей поддержке TypeScript.
                    </p>
                  </div>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Метрика</TableHead>
                        <TableHead>Web3.js</TableHead>
                        <TableHead>Ethers.js</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Поддержка TypeScript</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            Средняя
                          </Badge>
                          <p className="text-sm mt-1">Типы доступны, но не всегда полные</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Отличная
                          </Badge>
                          <p className="text-sm mt-1">Разработана с учетом TypeScript</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Размер бандла</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          >
                            Большой
                          </Badge>
                          <p className="text-sm mt-1">~590KB (минифицированный)</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Компактный
                          </Badge>
                          <p className="text-sm mt-1">~120KB (минифицированный)</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Читаемость кода</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            Средняя
                          </Badge>
                          <p className="text-sm mt-1">Более многословный API</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Высокая
                          </Badge>
                          <p className="text-sm mt-1">Более лаконичный и понятный API</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Удобство API</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            Среднее
                          </Badge>
                          <p className="text-sm mt-1">Более сложный API с большим количеством методов</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Высокое
                          </Badge>
                          <p className="text-sm mt-1">Интуитивно понятный API с Promise-based подходом</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Документация</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Обширная
                          </Badge>
                          <p className="text-sm mt-1">Подробная документация с множеством примеров</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Качественная
                          </Badge>
                          <p className="text-sm mt-1">Хорошо структурированная документация</p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Примеры кода</h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Web3.js</h4>

                      <div className="mb-4">
                        <h5 className="text-md font-medium mb-2">getBalance</h5>
                        <CodeBlock
                          code={`import Web3 from 'web3';

// Инициализация Web3
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');

// Получение баланса
async function getAccountBalance(address: string): Promise<string> {
  try {
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    return balanceEth;
  } catch (error) {
    console.error('Ошибка при получении баланса:', error);
    throw error;
  }
}`}
                          language="typescript"
                        />
                      </div>

                      <div>
                        <h5 className="text-md font-medium mb-2">sendTransaction</h5>
                        <CodeBlock
                          code={`import Web3 from 'web3';

// Инициализация Web3
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');

// Отправка транзакции
async function sendTransaction(
  fromAddress: string,
  toAddress: string,
  amountEth: string,
  privateKey: string
): Promise<string> {
  try {
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');
    const gasPrice = await web3.eth.getGasPrice();
    const amountWei = web3.utils.toWei(amountEth, 'ether');
    
    const txData = {
      from: fromAddress,
      to: toAddress,
      value: amountWei,
      gas: 21000,
      gasPrice: gasPrice,
      nonce: nonce
    };
    
    const signedTx = await web3.eth.accounts.signTransaction(
      txData,
      privateKey
    );
    
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction as string
    );
    
    return receipt.transactionHash;
  } catch (error) {
    console.error('Ошибка при отправке транзакции:', error);
    throw error;
  }
}`}
                          language="typescript"
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2">Ethers.js</h4>

                      <div className="mb-4">
                        <h5 className="text-md font-medium mb-2">getBalance</h5>
                        <CodeBlock
                          code={`import { ethers } from 'ethers';

// Инициализация провайдера
const provider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/YOUR_INFURA_KEY'
);

// Получение баланса
async function getAccountBalance(address: string): Promise<string> {
  try {
    const balanceWei = await provider.getBalance(address);
    const balanceEth = ethers.utils.formatEther(balanceWei);
    return balanceEth;
  } catch (error) {
    console.error('Ошибка при получении баланса:', error);
    throw error;
  }
}`}
                          language="typescript"
                        />
                      </div>

                      <div>
                        <h5 className="text-md font-medium mb-2">sendTransaction</h5>
                        <CodeBlock
                          code={`import { ethers } from 'ethers';

// Инициализация провайдера
const provider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/YOUR_INFURA_KEY'
);

// Отправка транзакции
async function sendTransaction(
  toAddress: string,
  amountEth: string,
  privateKey: string
): Promise<string> {
  try {
    // Создание кошелька с приватным ключом
    const wallet = new ethers.Wallet(privateKey, provider);
    
    // Создание транзакции
    const tx = {
      to: toAddress,
      value: ethers.utils.parseEther(amountEth)
    };
    
    // Отправка транзакции
    const transaction = await wallet.sendTransaction(tx);
    
    // Ожидание подтверждения
    const receipt = await transaction.wait();
    
    return receipt.transactionHash;
  } catch (error) {
    console.error('Ошибка при отправке транзакции:', error);
    throw error;
  }
}`}
                          language="typescript"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="networks" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Сравнение сетей Ethereum, BNB Smart Chain и Polygon</CardTitle>
                <CardDescription>
                  Анализ ключевых характеристик популярных блокчейн-сетей для разработки dApps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Ethereum</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Первая и самая популярная блокчейн-платформа для смарт-контрактов. Обеспечивает высокую
                      безопасность и децентрализацию, но имеет высокие комиссии за транзакции.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">BNB Smart Chain</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Блокчейн от Binance, совместимый с EVM. Предлагает более низкие комиссии и быстрые транзакции, но
                      с меньшей степенью децентрализации.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Polygon</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Layer 2 решение для Ethereum, обеспечивающее масштабируемость. Предлагает низкие комиссии и
                      высокую скорость при сохранении безопасности Ethereum.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Метрика</TableHead>
                        <TableHead>Ethereum</TableHead>
                        <TableHead>BNB Smart Chain</TableHead>
                        <TableHead>Polygon</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Средняя стоимость газа</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          >
                            Высокая
                          </Badge>
                          <p className="text-sm mt-1">$1-100+ (зависит от загрузки сети)</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Низкая
                          </Badge>
                          <p className="text-sm mt-1">$0.10-0.30</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Очень низкая
                          </Badge>
                          <p className="text-sm mt-1">$0.01-0.05</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Время подтверждения транзакций</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            Среднее
                          </Badge>
                          <p className="text-sm mt-1">~15 секунд (после обновления The Merge)</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Быстрое
                          </Badge>
                          <p className="text-sm mt-1">~3 секунды</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Быстрое
                          </Badge>
                          <p className="text-sm mt-1">~2 секунды</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Поддержка инфраструктуры</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Отличная
                          </Badge>
                          <p className="text-sm mt-1">Множество инструментов, библиотек и сервисов</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            Хорошая
                          </Badge>
                          <p className="text-sm mt-1">Растущая экосистема, совместимость с инструментами Ethereum</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Отличная
                          </Badge>
                          <p className="text-sm mt-1">Полная совместимость с инструментами Ethereum</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Популярность в рекламных dApps</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            Средняя
                          </Badge>
                          <p className="text-sm mt-1">Ограничена высокими комиссиями</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Высокая
                          </Badge>
                          <p className="text-sm mt-1">Популярна для массовых рекламных dApps</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Растущая
                          </Badge>
                          <p className="text-sm mt-1">Быстро набирает популярность</p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Смарт-контракты для цифровой рекламы</h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Контракт вознаграждения за просмотр</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Смарт-контракт, который автоматически выплачивает токены пользователям за просмотр рекламы.
                          Включает механизмы верификации просмотра и защиты от ботов.
                        </p>
                        <CodeBlock
                          code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AdViewReward is Ownable {
    IERC20 public rewardToken;
    uint256 public rewardPerView;
    mapping(address => uint256) public userViews;
    mapping(address => uint256) public lastViewTimestamp;
    uint256 public minTimeBetweenViews;
    
    event AdViewed(address indexed user, uint256 reward);
    
    constructor(
        address _rewardToken,
        uint256 _rewardPerView,
        uint256 _minTimeBetweenViews
    ) {
        rewardToken = IERC20(_rewardToken);
        rewardPerView = _rewardPerView;
        minTimeBetweenViews = _minTimeBetweenViews;
    }
    
    function viewAd(bytes calldata proof) external {
        // Проверка времени между просмотрами
        require(
            block.timestamp - lastViewTimestamp[msg.sender] >= minTimeBetweenViews,
            "Too soon for another view"
        );
        
        // Здесь должна быть логика проверки доказательства просмотра
        // verifyProof(proof, msg.sender);
        
        // Обновление данных пользователя
        userViews[msg.sender]++;
        lastViewTimestamp[msg.sender] = block.timestamp;
        
        // Отправка вознаграждения
        rewardToken.transfer(msg.sender, rewardPerView);
        
        emit AdViewed(msg.sender, rewardPerView);
    }
    
    function setRewardPerView(uint256 _rewardPerView) external onlyOwner {
        rewardPerView = _rewardPerView;
    }
    
    function withdrawTokens(uint256 amount) external onlyOwner {
        rewardToken.transfer(owner(), amount);
    }
}`}
                          language="solidity"
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Контракт учёта рекламных кликов</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Смарт-контракт для верифицируемого учёта кликов по рекламе. Использует оракулы для
                          подтверждения действительности клика и предотвращения мошенничества.
                        </p>
                        <CodeBlock
                          code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract AdClickVerifier is Ownable, ChainlinkClient {
    using Chainlink for Chainlink.Request;
    
    bytes32 private jobId;
    uint256 private fee;
    
    struct Campaign {
        address advertiser;
        uint256 budget;
        uint256 costPerClick;
        uint256 verifiedClicks;
        bool active;
    }
    
    mapping(uint256 => Campaign) public campaigns;
    mapping(bytes32 => uint256) public requestToCampaign;
    mapping(bytes32 => address) public requestToUser;
    
    event CampaignCreated(uint256 campaignId, address advertiser, uint256 budget);
    event ClickVerified(uint256 campaignId, address user);
    event ClickRejected(uint256 campaignId, address user);
    
    constructor(address _link, address _oracle, bytes32 _jobId, uint256 _fee) {
        setChainlinkToken(_link);
        setChainlinkOracle(_oracle);
        jobId = _jobId;
        fee = _fee;
    }
    
    function createCampaign(uint256 _budget, uint256 _costPerClick) external {
        uint256 campaignId = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        campaigns[campaignId] = Campaign({
            advertiser: msg.sender,
            budget: _budget,
            costPerClick: _costPerClick,
            verifiedClicks: 0,
            active: true
        });
        
        emit CampaignCreated(campaignId, msg.sender, _budget);
    }
    
    function registerClick(uint256 campaignId, string calldata clickData) external {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.active, "Campaign not active");
        require(campaign.budget >= campaign.costPerClick, "Campaign budget depleted");
        
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillClick.selector
        );
        
        req.add("clickData", clickData);
        req.add("campaignId", uint256ToString(campaignId));
        req.add("user", addressToString(msg.sender));
        
        bytes32 requestId = sendChainlinkRequest(req, fee);
        requestToCampaign[requestId] = campaignId;
        requestToUser[requestId] = msg.sender;
    }
    
    function fulfillClick(bytes32 requestId, bool valid) external recordChainlinkFulfillment(requestId) {
        uint256 campaignId = requestToCampaign[requestId];
        address user = requestToUser[requestId];
        Campaign storage campaign = campaigns[campaignId];
        
        if (valid && campaign.budget >= campaign.costPerClick) {
            campaign.verifiedClicks++;
            campaign.budget -= campaign.costPerClick;
            
            // Здесь можно добавить логику выплаты вознаграждения пользователю
            
            emit ClickVerified(campaignId, user);
        } else {
            emit ClickRejected(campaignId, user);
        }
    }
    
    // Вспомогательные функции
    function uint256ToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
    
    function addressToString(address _addr) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_addr)));
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(42);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
}
`}
                          language="solidity"
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Контракт-аукцион на размещение баннера</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Смарт-контракт для проведения аукциона на размещение рекламного баннера. Рекламодатели делают
                          ставки, а победитель получает право на размещение рекламы.
                        </p>
                        <CodeBlock
                          code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AdBannerAuction is Ownable {
    struct Bid {
        address bidder;
        uint256 amount;
        string bannerUrl;
        bool active;
    }
    
    struct AuctionSlot {
        uint256 startTime;
        uint256 endTime;
        uint256 minimumBid;
        address winner;
        uint256 highestBid;
        bool finalized;
        mapping(address => Bid) bids;
        address[] bidders;
    }
    
    mapping(uint256 => AuctionSlot) public auctionSlots;
    uint256 public nextAuctionId;
    
    event AuctionCreated(uint256 auctionId, uint256 startTime, uint256 endTime, uint256 minimumBid);
    event BidPlaced(uint256 auctionId, address bidder, uint256 amount, string bannerUrl);
    event AuctionFinalized(uint256 auctionId, address winner, uint256 amount);
    event BidWithdrawn(uint256 auctionId, address bidder);
    
    function createAuction(
        uint256 _startTime,
        uint256 _endTime,
        uint256 _minimumBid
    ) external onlyOwner {
        require(_startTime > block.timestamp, "Start time must be in the future");
        require(_endTime > _startTime, "End time must be after start time");
        
        uint256 auctionId = nextAuctionId++;
        AuctionSlot storage slot = auctionSlots[auctionId];
        slot.startTime = _startTime;
        slot.endTime = _endTime;
        slot.minimumBid = _minimumBid;
        slot.finalized = false;
        
        emit AuctionCreated(auctionId, _startTime, _endTime, _minimumBid);
    }
    
    function placeBid(uint256 auctionId, string calldata bannerUrl) external payable {
        AuctionSlot storage slot = auctionSlots[auctionId];
        
        require(block.timestamp >= slot.startTime, "Auction not started");
        require(block.timestamp <= slot.endTime, "Auction ended");
        require(msg.value >= slot.minimumBid, "Bid too low");
        require(msg.value > slot.highestBid, "Bid not high enough");
        
        // Возврат предыдущей ставки, если она существует
        if (slot.bids[msg.sender].active) {
            uint256 refundAmount = slot.bids[msg.sender].amount;
            payable(msg.sender).transfer(refundAmount);
        } else {
            slot.bidders.push(msg.sender);
        }
        
        // Обновление ставки
        slot.bids[msg.sender] = Bid({
            bidder: msg.sender,
            amount: msg.value,
            bannerUrl: bannerUrl,
            active: true
        });
        
        // Обновление высшей ставки
        slot.highestBid = msg.value;
        slot.winner = msg.sender;
        
        emit BidPlaced(auctionId, msg.sender, msg.value, bannerUrl);
    }
    
    function withdrawBid(uint256 auctionId) external {
        AuctionSlot storage slot = auctionSlots[auctionId];
        require(slot.bids[msg.sender].active, "No active bid");
        require(msg.sender != slot.winner || block.timestamp > slot.endTime, "Cannot withdraw winning bid");
        
        uint256 refundAmount = slot.bids[msg.sender].amount;
        slot.bids[msg.sender].active = false;
        
        payable(msg.sender).transfer(refundAmount);
        
        emit BidWithdrawn(auctionId, msg.sender);
    }
    
    function finalizeAuction(uint256 auctionId) external onlyOwner {
        AuctionSlot storage slot = auctionSlots[auctionId];
        require(block.timestamp > slot.endTime, "Auction not ended");
        require(!slot.finalized, "Auction already finalized");
        
        slot.finalized = true;
        
        if (slot.winner != address(0)) {
            // Перевод средств владельцу контракта
            payable(owner()).transfer(slot.highestBid);
            
            emit AuctionFinalized(auctionId, slot.winner, slot.highestBid);
        }
    }
    
    function getBannerUrl(uint256 auctionId) external view returns (string memory) {
        AuctionSlot storage slot = auctionSlots[auctionId];
        require(slot.finalized, "Auction not finalized");
        require(slot.winner != address(0), "No winner");
        
        return slot.bids[slot.winner].bannerUrl;
    }
    
    function getAuctionDetails(uint256 auctionId) external view returns (
        uint256 startTime,
        uint256 endTime,
        uint256 minimumBid,
        address winner,
        uint256 highestBid,
        bool finalized
    ) {
        AuctionSlot storage slot = auctionSlots[auctionId];
        return (
            slot.startTime,
            slot.endTime,
            slot.minimumBid,
            slot.winner,
            slot.highestBid,
            slot.finalized
        );
    }
}`}
                          language="solidity"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
