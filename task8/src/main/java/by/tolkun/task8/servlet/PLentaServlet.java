package by.tolkun.task8.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
public class PLentaServlet extends HttpServlet {
    @Override
    protected void doPost(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doGet(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws ServletException, IOException {
        System.out.println(request.getServletPath());
        String pageName = "result.jsp";
        switch (request.getServletPath()) {
            case "/status":
                response.getOutputStream().println("Application Is Running");
                break;
            case "/get":
                String name = request.getParameter("name");
                response.getOutputStream().println("Name is " + name);
                break;
            case "/check":
                PrintWriter out = response.getWriter();
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                out.print("{“sucesss” : true}");
                out.flush();
                break;
            case "/page":
                request
                        .getRequestDispatcher("/jsp/page.jsp")
                        .forward(request,response);
                break;
            case "/test1":
                response.sendRedirect(request.getContextPath() + "/status");
                return;
            case "/test2":
                response.sendRedirect(request.getContextPath()  + "/page");
                return;
            default:
                response.getOutputStream().println("Java Web Application");
                break;
        }
    }
}
