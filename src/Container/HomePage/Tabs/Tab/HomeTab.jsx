import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Casuals from '../../../../AllTabs/Casuals/Casuals';
import Sneakers from '../../../../AllTabs/Sneakers/Sneakers';

const HomeTab = () => {
    return (
        <Tabs className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold mb-4">JUST LANDED</h2>
            <TabList className="flex space-x-4 pt-5 overflow-x-auto justify-center scrollbar-hide">
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Casuals</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Sneakers</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Sandals</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Ladies Flats</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Formals</Tab>
                <Tab className="px-4 py-2 cursor-pointer hover:bg-gray-100 focus:outline-none" selectedClassName="bg-gray-200 rounded">Accessories</Tab>
            </TabList>
    
            <div className="mt-10">
                <TabPanel>
                    <Casuals />
                </TabPanel>
                <TabPanel>
                    <Sneakers></Sneakers>
                </TabPanel>
                <TabPanel>
                    <Casuals></Casuals>
                </TabPanel>
                <TabPanel>
                    <h2></h2>
                </TabPanel>
                <TabPanel>
                    <Casuals></Casuals>
                </TabPanel>
                <TabPanel>
                    <h2></h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default HomeTab;
