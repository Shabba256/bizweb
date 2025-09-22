import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  PiggyBank,
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface FinancialData {
  daily: {
    expenditure: string;
    earnings: string;
    profit: string;
    revenue: string;
  };
  monthly: {
    expenditure: string;
    earnings: string;
    profit: string;
    revenue: string;
  };
  annual: {
    expenditure: string;
    earnings: string;
    profit: string;
    revenue: string;
  };
}

interface Business {
  id: string;
  name: string;
  type: string;
  description: string;
  data: FinancialData;
}

interface BankAccount {
  id: string;
  bankName: string;
  accountType: string;
  balance: string;
  interestRate: string;
}

interface Debt {
  id: string;
  creditor: string;
  type: string;
  amount: string;
  interestRate: string;
  monthlyPayment: string;
}

interface Loan {
  id: string;
  lender: string;
  type: string;
  amount: string;
  interestRate: string;
  monthlyPayment: string;
  remainingBalance: string;
}

const ExpandableCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}> = ({ title, icon, children, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 rounded-t-xl transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="text-blue-600">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        {isExpanded ? 
          <ChevronUp className="text-gray-500 w-5 h-5" /> : 
          <ChevronDown className="text-gray-500 w-5 h-5" />
        }
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

const FinancialMetrics: React.FC<{ data: FinancialData }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'monthly' | 'annual'>('monthly');

  const currentData = data[activeTab];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {(['daily', 'monthly', 'annual'] as const).map((period) => (
          <button
            key={period}
            onClick={() => setActiveTab(period)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === period
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
          <div className="text-sm font-medium text-green-600 uppercase tracking-wide">Revenue</div>
          <div className="text-2xl font-bold text-green-800">{currentData.revenue}</div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="text-sm font-medium text-blue-600 uppercase tracking-wide">Earnings</div>
          <div className="text-2xl font-bold text-blue-800">{currentData.earnings}</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
          <div className="text-sm font-medium text-purple-600 uppercase tracking-wide">Profit</div>
          <div className="text-2xl font-bold text-purple-800">{currentData.profit}</div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
          <div className="text-sm font-medium text-orange-600 uppercase tracking-wide">Expenditure</div>
          <div className="text-2xl font-bold text-orange-800">{currentData.expenditure}</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  // Sample data - easily editable
  const companyData: FinancialData = {
    daily: {
      expenditure: "$45,200",
      earnings: "$78,900",
      profit: "$33,700",
      revenue: "$82,100"
    },
    monthly: {
      expenditure: "$1.2M",
      earnings: "$2.1M",
      profit: "$890K",
      revenue: "$2.3M"
    },
    annual: {
      expenditure: "$14.2M",
      earnings: "$24.8M",
      profit: "$10.6M",
      revenue: "$27.1M"
    }
  };

  const businesses: Business[] = [
    {
      id: "1",
      name: "Sterling Tech Solutions",
      type: "Technology Services",
      description: "Leading provider of cloud infrastructure and software development services",
      data: {
        daily: { expenditure: "$12,500", earnings: "$18,200", profit: "$5,700", revenue: "$19,800" },
        monthly: { expenditure: "$375K", earnings: "$546K", profit: "$171K", revenue: "$594K" },
        annual: { expenditure: "$4.5M", earnings: "$6.6M", profit: "$2.1M", revenue: "$7.1M" }
      }
    },
    {
      id: "2",
      name: "Sterling Real Estate",
      type: "Property Management",
      description: "Premium commercial and residential property management and development",
      data: {
        daily: { expenditure: "$8,900", earnings: "$15,400", profit: "$6,500", revenue: "$16,200" },
        monthly: { expenditure: "$267K", earnings: "$462K", profit: "$195K", revenue: "$486K" },
        annual: { expenditure: "$3.2M", earnings: "$5.5M", profit: "$2.3M", revenue: "$5.8M" }
      }
    },
    {
      id: "3",
      name: "Sterling Consulting",
      type: "Business Consulting",
      description: "Strategic business consulting and financial advisory services",
      data: {
        daily: { expenditure: "$6,200", earnings: "$12,800", profit: "$6,600", revenue: "$13,500" },
        monthly: { expenditure: "$186K", earnings: "$384K", profit: "$198K", revenue: "$405K" },
        annual: { expenditure: "$2.2M", earnings: "$4.6M", profit: "$2.4M", revenue: "$4.9M" }
      }
    }
  ];

  const bankAccounts: BankAccount[] = [
    { id: "1", bankName: "Chase Business", accountType: "Primary Operating", balance: "$2.4M", interestRate: "0.85%" },
    { id: "2", bankName: "Wells Fargo", accountType: "Reserve Fund", balance: "$890K", interestRate: "1.2%" },
    { id: "3", bankName: "Bank of America", accountType: "Payroll Account", balance: "$320K", interestRate: "0.65%" },
    { id: "4", bankName: "Silicon Valley Bank", accountType: "Investment Account", balance: "$1.8M", interestRate: "2.1%" }
  ];

  const loans: Loan[] = [
    {
      id: "1",
      lender: "First National Bank",
      type: "Business Equipment Loan",
      amount: "$500K",
      interestRate: "4.2%",
      monthlyPayment: "$12,800",
      remainingBalance: "$340K"
    },
    {
      id: "2",
      lender: "Capital One Business",
      type: "Working Capital Line of Credit",
      amount: "$1M",
      interestRate: "6.8%",
      monthlyPayment: "$18,500",
      remainingBalance: "$750K"
    }
  ];

  const debts: Debt[] = [
    {
      id: "1",
      creditor: "Sterling Office Supplies",
      type: "Trade Payable",
      amount: "$45K",
      interestRate: "N/A",
      monthlyPayment: "$15K"
    },
    {
      id: "2",
      creditor: "Corporate Credit Services",
      type: "Business Credit Card",
      amount: "$85K",
      interestRate: "18.9%",
      monthlyPayment: "$8,500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sterling Financial Group</h1>
                <p className="text-sm text-gray-500">Premium Financial Services</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">Overview</a>
              <a href="#businesses" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#banking" className="text-gray-700 hover:text-blue-600 transition-colors">Banking</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Building Financial Excellence
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A diversified financial services company delivering exceptional results across multiple business sectors
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">$27.1M</div>
                <div className="text-blue-200">Annual Revenue</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">$10.6M</div>
                <div className="text-blue-200">Annual Profit</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">3</div>
                <div className="text-blue-200">Business Units</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Company Financial Overview */}
        <section id="overview">
          <ExpandableCard
            title="Company Financial Overview"
            icon={<TrendingUp className="w-6 h-6" />}
          >
            <FinancialMetrics data={companyData} />
          </ExpandableCard>
        </section>

        {/* Business Portfolio */}
        <section id="businesses">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Portfolio</h2>
          <div className="space-y-6">
            {businesses.map((business) => (
              <ExpandableCard
                key={business.id}
                title={business.name}
                icon={<Building2 className="w-6 h-6" />}
              >
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {business.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{business.description}</p>
                <FinancialMetrics data={business.data} />
              </ExpandableCard>
            ))}
          </div>
        </section>

        {/* Banking Section */}
        <section id="banking">
          <ExpandableCard
            title="Banking & Accounts"
            icon={<PiggyBank className="w-6 h-6" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bankAccounts.map((account) => (
                <div key={account.id} className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">{account.bankName}</h4>
                  <p className="text-gray-600 mb-3">{account.accountType}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">Balance</div>
                      <div className="text-xl font-bold text-green-600">{account.balance}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Interest Rate</div>
                      <div className="text-lg font-semibold text-blue-600">{account.interestRate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableCard>
        </section>

        {/* Loans Section */}
        <section>
          <ExpandableCard
            title="Loans & Credit Facilities"
            icon={<CreditCard className="w-6 h-6" />}
          >
            <div className="space-y-6">
              {loans.map((loan) => (
                <div key={loan.id} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{loan.type}</h4>
                      <p className="text-gray-600">{loan.lender}</p>
                    </div>
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
                      {loan.interestRate}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Original Amount</div>
                      <div className="text-lg font-semibold">{loan.amount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Monthly Payment</div>
                      <div className="text-lg font-semibold text-orange-600">{loan.monthlyPayment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Remaining Balance</div>
                      <div className="text-lg font-semibold text-red-600">{loan.remainingBalance}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableCard>
        </section>

        {/* Debts Section */}
        <section>
          <ExpandableCard
            title="Outstanding Debts & Payables"
            icon={<FileText className="w-6 h-6" />}
          >
            <div className="space-y-6">
              {debts.map((debt) => (
                <div key={debt.id} className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{debt.type}</h4>
                      <p className="text-gray-600">{debt.creditor}</p>
                    </div>
                    {debt.interestRate !== "N/A" && (
                      <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
                        {debt.interestRate}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Total Amount</div>
                      <div className="text-lg font-semibold text-red-600">{debt.amount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Monthly Payment</div>
                      <div className="text-lg font-semibold text-orange-600">{debt.monthlyPayment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableCard>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Sterling Financial Group</h3>
                  <p className="text-gray-400">Premium Financial Services</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Leading the way in diversified financial services with a commitment to excellence, 
                innovation, and sustainable growth across all business sectors.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">contact@sterlingfg.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">123 Financial District, New York, NY 10004</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 2:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Emergency Contact</h5>
                <p className="text-gray-300">24/7 Support: +1 (555) 999-0000</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Sterling Financial Group. All rights reserved. | Licensed Financial Services Provider
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;