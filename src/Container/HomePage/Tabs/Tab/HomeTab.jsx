import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Casuals from '../../../../AllTabs/Casuals/Casuals';

const HomeTab = () => {
    return (
        <Tabs className='container mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
            <h2 className="text-lg font-bold mb-4 ">JUST LANDED</h2>
            <TabList className="flex space-x-4 pt-5 overflow-x-auto justify-center scrollbar-hide">
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Casuals</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Sneakers</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Sandals</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Ladies Flats</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Formals</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Accessories</Tab>
            </TabList>
    
            <div className='mt-10'>
                <TabPanel>
                    <div>
                        <Casuals></Casuals>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Sneakers content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Sandals content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Ladies Flats content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Formals content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Accessories content</h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default HomeTab;
