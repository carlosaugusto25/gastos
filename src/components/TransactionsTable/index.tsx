import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../service/api";

interface IPropsTransactionsTable {
    id: number;
    title: string;
    category: string;
    amount: number;
    createdAt: string;
    type: string;
}

export function TransactionsTable() {

    const [transactionsTable, setTransactionsTable] = useState<IPropsTransactionsTable[]>([])

    useEffect(() => {
        api.get('transactions').then(res => {
            setTransactionsTable(res.data.transactions)
        })
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsTable.map(tran => (
                        <tr key={tran.id}>
                            <td>{tran.title}</td>
                            <td className={tran.type}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(tran.amount)}</td>
                            <td>{tran.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(tran.createdAt))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}